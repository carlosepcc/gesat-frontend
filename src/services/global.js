import { ref } from 'vue';

// State
const state = ref({
  user:{
  username:'alanmt',
  name: 'Alan Mathison Turing',
  rol: 'Administrador',
  img: 'https://www.ecured.cu/images/c/c6/Alan_Turing_II.jpg',

  },
  dense: false,
  grid:false,
  artefactoArr: [],
  userArr:[],
  minutasArr:[],
  rnotificacionArr: [],
  rtecnicoArr:[],
  hallazgoArr:[],
  dictamenArr: [],

  currentArtefacto:{
  name:'',
  description:'',
  fase:1,
  disciplina:1,
  attachments:[],},
  currentMinutasArr:{},
  currentArtefacto:{},
  currentArtefacto:{},
  currentArtefacto:{},
  currentArtefacto:{},

});

// Mutations

export default { state };
