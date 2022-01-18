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
  artefactoArr: [],
  userArr:[],
  minutasArr:[],
  rnotificacionArr: [],
  rtecnicoArr:[],
  hallazgoArr:[],
  dictamenArr: [],

});

// Mutations
function addArtefacto(artefacto) {
  return state.value.artefactoArr.push(artefacto);
}

export default { state, addArtefacto };
