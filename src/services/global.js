import { ref } from 'vue';

// State
const state = ref({
  count: 1,
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
