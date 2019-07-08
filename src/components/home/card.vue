<template>
    <div class="card">
        <v-card>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{name}}</h3>
                <div>
                    {{text}}
                    <hr>
                    <br>
                    <p>Стоимость: {{cost}}</p>
                </div>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-btn flat color="orange">Купить</v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
  // Сделать картинку

  props: ['name', 'text', 'count', 'cost']
}
</script>

<style lang="stylus" scoped>

.card
    margin: 10px
</style>
