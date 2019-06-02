const cursos = require ('./datos');
const estudiantes = require ('./archivo');

const argv = require ('yargs')
			.command('inscribir','Realice la respectiva inscripcion',estudiantes.opciones)
			.argv;


if (argv.id != undefined) {	
	// Validación del curso
	if (cursos.buscarCurso(argv.i) == undefined ) {
		estudiantes.mensajeCursoInvalido(argv.i);
		cursos.cursosDisponibles();
		return;
		process.exit();
	}	
	//Inscripción
	cursos.mostrarCurso(cursos.buscarCurso(argv.i));
	 //estudiantes.crearArchivo(argv.n,argv.c,cursos.buscarCurso(argv.i));
	estudiantes.crearArchivoWeb(argv.n,argv.c,cursos.buscarCurso(argv.i));
}else{
	//Mostrar Cursos
	for (i = 1; i <= (cursos.cursosRegistrados).length; i++) {
			cursos.mostrarCursoConTiempo(cursos.buscarCurso(i),function(resultado){
			console.log(resultado);
		});
	}
}