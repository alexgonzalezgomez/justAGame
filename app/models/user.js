import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  baseAtaque: attr('number'),
  baseDefensa: attr('number'),
  baseVelocidad: attr('number'),
  ataqueFisico: attr('number'),
  defensaFisica: attr('number'),
  ataqueDistancia: attr('number'),
  defensaDistancia: attr('number'),
});
