import { registerRootComponent } from 'expo';
import { View, StyleSheet, FlatList } from 'react-native';
import { AddTodoModal } from './components/AddTodoModal';
import { useState } from 'react';
import { CustomButton } from './components/CustomButton';
import { Todo } from './entity/Todo';
import { TodoMapper } from './mapper/TodoMapper';
import { useToggle } from './hooks/useToggle';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAddTodoModalOpen, toggleIsAddTodoModalOpen] = useToggle();

  const handleAddTodo = (text: string): void => {
    setTodos((prevTodos) => [...prevTodos, TodoMapper.toTodo(text)]);
    toggleIsAddTodoModalOpen();
  };

  const handleRemoveTodo = (id: string): void =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <View style={styles.appContainer}>
      <AddTodoModal
        isOpen={isAddTodoModalOpen}
        onAddTodo={handleAddTodo}
        onCancel={toggleIsAddTodoModalOpen}
      />
      <View style={styles.addTodoBtn}>
        <CustomButton
          text="Add new todo"
          bgColor="#a0e1e1"
          color="#000000"
          onPress={toggleIsAddTodoModalOpen}
        />
      </View>
      <View style={styles.todoList}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <CustomButton
                text={item.text}
                bgColor="#fae14d"
                color="#000000"
                onPress={() => handleRemoveTodo(item.id)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  addTodoBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  todoList: {
    flex: 3,
  },
  todoContainer: {
    marginBottom: 8,
  },
  todoText: {
    color: '#000000',
  },
});

registerRootComponent(App);
