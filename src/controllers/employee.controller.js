import { response } from "express";
import { pool } from "../db.js";

export const getEmployes = async (req, res = response) => {
	try {
		const [rows] = await pool.query("SELECT * FROM employee");
		if (rows.length <= 0) {
			res.status(404).josn({ ok: false, message: "Employees table empty" });
		}
		res.json(rows);
	} catch (error) {
		res.status(500).json({ ok: false, message: "Something went wrong" });
	}
};

export const getEmployeById = async (req, res = response) => {
	try {
		const [row] = await pool.query("SELECT * FROM employee WHERE id=?", [req.params.id]);
		if (row.length <= 0) {
			res.status(404).josn({ ok: false, message: "Employee not found" });
		}
		res.json(row);
	} catch (error) {
		res.status(500).json({ ok: false, message: "Something went wrong" });
	}
};

export const createEmploye = async (req, res = response) => {
	try {
		const [row] = await pool.query("INSERT INTO employee (name, salary) values(?, ?)", [
			req.body.name,
			req.body.salary,
		]);
		res.json({
			id: row.insertId,
			name: req.body.name,
			salary: req.body.salary,
		});
	} catch (error) {
		res.status(500).json({ ok: false, message: "Something went wrong" });
	}
};

export const updateEmploye = async (req, res = response) => {
	try {
		const employee = req.body;
		const [result] = await pool.query("UPDATE employee SET ? WHERE id=?", [
			{ ...employee }, //* Sending multiple parameters to update
			req.params.id,
		]);
		if (result.affectedRows !== 1) {
			res.status(404).json({
				ok: false,
				message: "Employee not found",
			});
		}
		const [row] = await pool.query("SELECT * from employee WHERE id=?", [
			req.body.id ? req.body.id : req.params.id,
		]);
		res.status(200).json(row[0]);
	} catch (error) {
		res.status(500).json({ ok: false, message: "Something went wrong" });
	}
};

export const deleteEmploye = async (req, res = response) => {
	try {
		const [row] = await pool.query("DELETE FROM employee WHERE id=?", [req.params.id]);
		if (row.affectedRows !== 1) {
			res.status(404).json({
				ok: false,
				message: "Employee not found",
			});
		}
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ ok: false, message: "Something went wrong" });
	}
};
