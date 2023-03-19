export const errorHandle = (req, res) =>
	res.status(404).send({ ok: false, message: "endpoint not found" });
