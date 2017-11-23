import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { computed } from '@ember/object';

export default Controller.extend({

  selected: null,

  players: computed.alias('model'),

  selectedPlayer: computed(
    'selected',
    {
      get() {
        // return this.model.reduce((player) => player.id === this.get('selected'));
        const selected = this.get('selected');
        const result = this.get('players').filter((player) => {
          return player.get('id') === selected ? player : null;
        });
        return result.pop();
      }
    }
  ),

  isModalShowing: false,

  actions: {

    selectPlayer(id) {
      this.set('selected', id);
      later(this, () => {
        this.toggleProperty('isModalShowing');
      }
      , 200);
    },

    toggleModalAndRedirect() {
      this.toggleProperty('isModalShowing');
      const playerId = this.get('selectedPlayer.id');
      this.transitionToRoute('/home', { playerId });
    },

    closeModal() {
      this.toggleProperty('isModalShowing');
    },
  },
});
