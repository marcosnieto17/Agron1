angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('ingAgronMica.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('ingAgronMica.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('ingAgronMica.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('ingAgronMica.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('ingAgronMica.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('ingAgronMica', {
    url: '/side-menu21',
    templateUrl: 'templates/ingAgronMica.html',
    controller: 'ingAgronMicaCtrl'
  })

  .state('ingAgronMica.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('ingAgronMica.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('ingAgronMica.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('ingAgronMica.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('ingAgronMica.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('ingAgronMica.4AO', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('ingAgronMica.5AO', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('ingAgronMica.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('ingAgronMica.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('ingAgronMica.matemTica', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matemTica.html',
        controller: 'matemTicaCtrl'
      }
    }
  })

  .state('ingAgronMica.fSica', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSica.html',
        controller: 'fSicaCtrl'
      }
    }
  })

  .state('ingAgronMica.quMica', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMica.html',
        controller: 'quMicaCtrl'
      }
    }
  })

  .state('ingAgronMica.LgebraYGeometrAAnalTica', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/LgebraYGeometrAAnalTica.html',
        controller: 'LgebraYGeometrAAnalTicaCtrl'
      }
    }
  })

  .state('ingAgronMica.anLisisMatemTicoI', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anLisisMatemTicoI.html',
        controller: 'anLisisMatemTicoICtrl'
      }
    }
  })

  .state('quMicaGeneralEInorgNica', {
    url: '/page17',
    templateUrl: 'templates/quMicaGeneralEInorgNica.html',
    controller: 'quMicaGeneralEInorgNicaCtrl'
  })

  .state('ingAgronMica.anatomAYMorfologAVegetal', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anatomAYMorfologAVegetal.html',
        controller: 'anatomAYMorfologAVegetalCtrl'
      }
    }
  })

  .state('ingAgronMica.introducciNALasCienciasAgrarias', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALasCienciasAgrarias.html',
        controller: 'introducciNALasCienciasAgrariasCtrl'
      }
    }
  })

  .state('ingAgronMica.quMicaOrgNica', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaOrgNica.html',
        controller: 'quMicaOrgNicaCtrl'
      }
    }
  })

  .state('ingAgronMica.fSica2', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSica2.html',
        controller: 'fSica2Ctrl'
      }
    }
  })

  .state('ingAgronMica.botNicaSistemTica', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/botNicaSistemTica.html',
        controller: 'botNicaSistemTicaCtrl'
      }
    }
  })

  .state('ingAgronMica.informTica', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('ingAgronMica.expresiNOralYEscrita', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('representaciNTCnica', {
    url: '/page25',
    templateUrl: 'templates/representaciNTCnica.html',
    controller: 'representaciNTCnicaCtrl'
  })

  .state('tallerDeElectrNicaAplicada', {
    url: '/page26',
    templateUrl: 'templates/tallerDeElectrNicaAplicada.html',
    controller: 'tallerDeElectrNicaAplicadaCtrl'
  })

  .state('ingAgronMica.electrNicaII', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNicaII.html',
        controller: 'electrNicaIICtrl'
      }
    }
  })

  .state('ingAgronMica.instalacionesElCtricasIII', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesElCtricasIII.html',
        controller: 'instalacionesElCtricasIIICtrl'
      }
    }
  })

  .state('ingAgronMica.tallerDeDocumentaciNElCtrica', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDocumentaciNElCtrica.html',
        controller: 'tallerDeDocumentaciNElCtricaCtrl'
      }
    }
  })

  .state('ingAgronMica.sensoresYAutomatismo', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sensoresYAutomatismo.html',
        controller: 'sensoresYAutomatismoCtrl'
      }
    }
  })

  .state('ingAgronMica.neumTicaEHidrUlica', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neumTicaEHidrUlica.html',
        controller: 'neumTicaEHidrUlicaCtrl'
      }
    }
  })

  .state('ingAgronMica.tallerDeEmpresaTecnolGica', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeEmpresaTecnolGica.html',
        controller: 'tallerDeEmpresaTecnolGicaCtrl'
      }
    }
  })

  .state('ingAgronMica.instalacionesDeCorrientesDBiles', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesDeCorrientesDBiles.html',
        controller: 'instalacionesDeCorrientesDBilesCtrl'
      }
    }
  })

  .state('ingAgronMica.electrNicaIII', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNicaIII.html',
        controller: 'electrNicaIIICtrl'
      }
    }
  })

  .state('ingAgronMica.sistemasDigitales', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasDigitales.html',
        controller: 'sistemasDigitalesCtrl'
      }
    }
  })

  .state('ingAgronMica.trabajoFinal', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('ingAgronMica.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('ingAgronMica.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('ingAgronMica.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});