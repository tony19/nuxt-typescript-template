<template>
  <section class="">

        <v-flex id="adminChild" xs12>
          <nuxt-child :key="$router.fullPath"></nuxt-child>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 md4>
            <v-list>
              <v-list-tile v-for="(item, key) in items" :key="key">
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                <v-spacer></v-spacer>
                <v-list-tile-action @click="deleteItem(key)">
                  <v-btn icon><v-icon>delete</v-icon></v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 md6>
            <v-text-field
              @keyup.enter="addItem"
              name="item"
              label="Add New Item"
              id="item"
              v-model="item"
            ></v-text-field>
            <v-btn @click="addItem">Add Item</v-btn>
          </v-flex>
        </v-layout>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import {DB} from '~/services/fireinit'

@Component({})
export default class AdminItemsPage extends Vue {

  item = ''
  items = {}
  itemsRef

  async asyncData({store}) {
    return {
      itemsRef: DB.ref(`items/${store.state.user.uid}`)
    }
  }

  created () {
    this.itemsRef.on('value', snapshot => {
      this.items = snapshot.val()
    })
  }

  async addItem () {
    await this.itemsRef.push({ name: this.item })
    this.item = ''
  }

  deleteItem (key) {
    this.itemsRef.child(key).remove()
  }
}
</script>

<style>
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
<!--  -->
