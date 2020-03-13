<template>
  
  <div class="container">
    
    <div class="holder">

      <form @submit.prevent="addTodo"> <!-- prevents pages from reload -->
        <input type="text" placeholder="Enter a todo.." v-model="todo">
      </form>

      
      <!-- {{ todo }} the shows the data captured in the form -->
      <ul>
          <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <li v-for="(data, index) in todos" :key='index'> {{data.todo}}
              <i class="fa fa-minus-circle" v-on:click="removeTodo(index)"></i>
            </li>
          </transition-group>
      </ul>
      
      <p>These are todays Todos.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Todos',
  data(){ //this data can be accessed in the template using {{ }}
    return {
      todo: '',
      name: 'My ToDo App',
      todos: [
        {"todo":"Learn Vue Framework"},
        {"todo":"Build a website"}
      ]
    }
  },
  methods: {
    addTodo(){
      this.todos.push(
        {todo: this.todo} //adding new todo to todos list
      );
      this.todo =''; //clearing form input
    },
    removeTodo(id) {
      this.todos.splice(id, 1); //removes todo fromLIst
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; 
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
      background: #fff; 
    }
  
  i{
    float: right;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid rgb(142, 62, 246, 0.6);
    margin-bottom: 2px;
    color: rgb(136, 118, 153);
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    
    padding: 2em 5em 5em 5em;
  }

  input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}
</style>
