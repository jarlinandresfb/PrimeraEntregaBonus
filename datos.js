let cursosRegistrados = [
{id: 1, nombre: 'Estructura de Datos', duracion: 500,costo: 700000 },
{id: 2, nombre: 'Ingles', duracion: 250,costo: 300000 },
{id: 3, nombre: 'Base de Datos', duracion: 480,costo: 430000 }
];


let buscarCurso = (idCurso) => cursosRegistrados.find( cursoID => cursoID.id == idCurso);

let mostrarCursoConTiempo = (curso,callback) => {
	setTimeout(function(){
			let informacion ='El id del curso es '+curso.id+', su nombre es '+
			curso.nombre+', tiene una duración de '+curso.duracion+' horas y un valor de '+curso.costo+' pesos.';
			callback(informacion);	
		},2000 * cursosRegistrados.indexOf(curso));		   
}


let mostrarCurso = (curso) => {
		console.log('\n' +'El id del curso es '+curso.id+', su nombre es '+
			curso.nombre+', tiene una duración de '+curso.duracion+' horas y un valor de '+curso.costo+' pesos.');		   
}

let cursosDisponibles = () => {
	console.log('Estos son los cursos disponibles:');
	cursosRegistrados.forEach( curso => mostrarCurso(curso));
}


module.exports = {
	buscarCurso,
	cursosRegistrados,
	mostrarCursoConTiempo,
	mostrarCurso,
	cursosDisponibles,
};