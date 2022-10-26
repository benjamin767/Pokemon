const { Router } = require('express');
const { getAllTypes } = require('./controllers/typesController.js');

const router = Router();

router.get("/", async (req,res) => {
	try{
		const types = await getAllTypes();
		res.status(200).json(types);
	}catch(err){
		res.status(404).json({error: err.message});
	}
});

module.exports = router;