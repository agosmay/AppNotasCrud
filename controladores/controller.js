const db = require('../db/db')

const inicioGET  = (req,res)=> {
	
	let sql = "SELECT * FROM Tareas"
	db.query(sql, (err,data)=> {
		if(err) throw err;
		res.render('index' , {
		titulo : 'Inicio',
		data: data
	})
		
		
		
	})
	
}
const agregarNotaGET = (req,res) => {
	res.render('agregarNota' , {
		titulo : 'Agregar Nota'
	})
	
}

const editarNotaGET = (req,res)=> {
	let sql = "SELECT * FROM Tareas WHERE id=?"
	let id = req.params.id
	db.query(sql, [id], (err,data)=> {
		if(err)throw err;;
		res.render('editarNota' , {
		titulo : 'Editar Nota',
		data : data[0]
		
	})
		
	})
	
	
	
}

const agregarNotaPOST = (req,res)=> {
	let cuerpo = req.body
	let sql = "INSERT INTO Tareas SET ?"
	db.query(sql, [cuerpo], (err,data)=> {
		if(err) throw err;
		res.redirect('/')
	})
}


const editarNotaPOST = (req,res)=> {
	let sql = "UPDATE Tareas SET ? WHERE id=?"
	let cuerpo = req.body
	let id = req.params.id
	db.query(sql, [cuerpo,id], (err,data)=> {
		if(err) throw err;
		res.redirect('/')
		
	})
	
	
}
	
const borrarNotaGET = (req,res)=> {
	let sql = "DELETE FROM Tareas WHERE id=?"
	let id = req.params.id
	db.query(sql, id, (err,data)=> {
		if(err) throw err;
		res.redirect('/')
		
	})
	
}

module.exports = {inicioGET, agregarNotaGET, editarNotaGET, agregarNotaPOST, editarNotaPOST, borrarNotaGET}