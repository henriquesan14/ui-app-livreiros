<template>
  <div class="table-responsive">
    <table class="table table-hover table-sm">
        <thead class="thead-dark">
            <tr>
                <th>Foto</th>
                <th>Cód.</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Assunto</th>
                <th>Ano</th>
                <th>Qtd</th>
                <th>Valor</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="livro of livros" :key="livro.id">
                <td><img id="icone-foto" src="../../../assets/livro.png"></td>
                <td>{{livro.id}}</td>
                <td>{{livro.titulo}}</td>
                <td>{{livro.autor}}</td>
                <td>{{livro.editora}}</td>
                <td>{{livro.assunto}}</td>
                <td>{{livro.ano}}</td>
                <td>{{livro.qtd}}</td>
                <td>R${{livro.valor}}</td>
                <td><button class="btn btn-info btn-sm"><i class="fas fa-list-alt"></i></button></td>
                <td><button class="btn btn-primary btn-sm" data-toggle="modal"
        data-target="#modalLivro"><i class="fas fa-pencil-alt"></i></button></td>
                <td><button class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalLivroDescrito"><i class="fas fa-plus-circle"></i></button></td>
                <td><button class="btn btn-danger btn-sm"><i class="fas fa-eye"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaLivros",
  data() {
    return {
      livros: [
        {id: '1',
        titulo: 'Livro1',
        autor: 'Autor1',
        editora: 'Editora1',
        assunto: 'Assunto1',
        ano: '1991',
        qtd: '1',
        valor: 1.1},
        {id: '2',
        titulo: 'Livro2',
        autor: 'Autor2',
        editora: 'Editora2',
        assunto: 'Assunto2',
        ano: '1992',
        qtd: '2',
        valor: 2.2},
        {id: '3',
        titulo: 'Livro3',
        autor: 'Autor3',
        editora: 'Editora3',
        assunto: 'Assunto3',
        ano: '1993',
        qtd: '3',
        valor: 3.3},
        {id: '4',
        titulo: 'Livro4',
        autor: 'Autor4',
        editora: 'Editora4',
        assunto: 'Assunto4',
        ano: '1994',
        qtd: '4',
        valor: 4.4},
        {id: '5',
        titulo: 'Livro5',
        autor: 'Autor5',
        editora: 'Editora5',
        assunto: 'Assunto5',
        ano: '1995',
        qtd: '5',
        valor: 5.5}
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#icone-foto{
  display: block;
  width:40px;
  height: 60px;
}

</style>
