<template>
  <div>
    <form>
      <div class="row">
        <div class="form-group col-md-3">
          <label for="codigo">Código*</label>
          <input type="text" name="codigo" id="codigo" class="form-control">
        </div>
        <div class="form-group col-md-3">
          <label for="subcodigo">Sub.Código*</label>
          <input type="text" name="subcodigo" id="subcodigo" class="form-control">
        </div>
        <div class="form-group col-md-3">
          <label for="valor">Valor*</label>
          <input type="text" name="valor" id="valor" class="form-control">
        </div>
        <div class="form-group col-md-3">
          <label for="qtd">Qtd*</label>
          <input type="number" name="qtd" id="qtd" class="form-control">
        </div>
        <div class="form-group col-md-12">
          <label for="obs">Obs*</label>
          <textarea type="text" name="obs" id="obs" class="form-control"></textarea>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead class="thead-light">
            <tr>
              <th>CAPA</th>
              <th>-(R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(valueCapa, index) in valuesCapa" :key="index">
              <td>
                <input type="checkbox" class="mr-1">
                <span>{{valueCapa.desc}}</span>
              </td>
              <td>{{valueCapa.valor}}</td>
            </tr>
          </tbody>

          <thead class="thead-light">
            <tr>
              <th>PAGINAS</th>
              <th>-(R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(valuePag, index) in valuesPag" :key="index">
              <td>
                <input type="checkbox" class="mr-1">
                <span>{{valuePag.desc}}</span>
              </td>
              <td>{{valuePag.valor}}</td>
            </tr>
          </tbody>

          <thead class="thead-light">
            <tr>
              <th>DORSO</th>
              <th>-(R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(valueDorso, index) in valuesDorso" :key="index">
              <td>
                <input type="checkbox" class="mr-1">
                <span>{{valueDorso.desc}}</span>
              </td>
              <td>{{valueDorso.valor}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
    <button class="btn btn-success">
      <i class="fas fa-save mr-1"></i>Salvar
    </button>
  </div>
</template>

<script>
export default {
  name: "FormLivroDescrito",
  data() {
    return {
      valuesCapa: [
        { desc: "Rasgada", valor: "2.00" },
        { desc: "Preservada", valor: "0.00" },
        { desc: "Detonada", valor: "2.00" },
        { desc: "Com leves desgastes", valor: "1.00" }
      ],
      valuesPag: [
        { desc: "Preservadas", valor: "0.00" },
        { desc: "Com leves desgastes", valor: "1.00" }
      ],
      valuesDorso: [{ desc: "Desgastado", valor: "2.00" }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
