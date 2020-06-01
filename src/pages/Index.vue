<template>
  <q-page>
    <div class="row q-pt-lg q-pl-sm q-pr-sm">
      <div class="col-md-6">
        <div class="row q-ma-xs">
          <q-form
            ref="form"
            @submit="onSubmit"
            @reset="onReset"
            class="q-pa-md col-md-8 shadow-10"
          >
            <div class="text-center">
              <span class="text-h6"> Cadastrar Convênio </span>
            </div>
            <q-input v-model="data_convenio.none" label="Nome da empresa*" :rules="[ val => val && val.length > 0 || 'Campo obrigatório!']" />
            <q-input v-model="data_convenio.contribuicao" label="Contribuição mínima*" :rules="[ val => val && val.length > 0 || 'Campo obrigatório!']" type="number"/>
            <q-select v-model="data_convenio.empresa" :options="options" label="Empresas" />
            <q-select v-model="data_convenio.tipo_investidor" :options="tipos_investidor" label="Tipo de investidor" />
            <div class="q-mt-md" style="margin-left: -10px">
              <q-checkbox v-model="data_convenio.parentesco" label="Aceita plano familia?" />
            </div>
            <q-select v-if="data_convenio.parentesco" v-model="data_convenio.grau_parentesco" :options="tipos_parentesco" label="Tipo parentesco" />
            <div class="col-12 q-mt-md">
              <div class="row justify-between">
                <q-btn label="Cadastrar" type="submit" color="primary"/>
                <q-btn outline label="Limpar formulário" type="reset" color="secondary" flat class="q-ml-sm" />
              </div>
            </div>
          </q-form>
        </div>
      </div>
      <div class="col-md-6">
        <q-table
          title="Convênios"
          :data="data"
          :columns="columns"
          row-key="id"
          :filter="filter"
          binary-state-sort
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageConvenios',
  data () {
    return {
      data_convenio: {},
      filter: '',
      options: [
        'Ambev',
        'Petrobras'
      ],
      tipos_investidor: [
        'Conservador',
        'Arrojado'
      ],
      tipos_parentesco: ['Pai', 'Mãe', 'Filho(a)', 'Neto(a)', 'Avô', 'Avó'],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$refs.myForm.validate().then(success => {
        if (success) {
          // yay, models are correct
        } else {
          // oh no, user has filled in
          // at least one invalid value
        }
      })
    },
    onReset () {
      this.data_convenio = {}
    }
  }
}
</script>
