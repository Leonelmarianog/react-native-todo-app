import {
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { CustomButton } from './CustomButton';
import { useState } from 'react';

interface IAddTodoModalProps {
  isOpen: boolean;
  onAddTodo: (text: string) => void;
  onCancel: (event: GestureResponderEvent) => void;
}

export const AddTodoModal = ({
  isOpen,
  onAddTodo,
  onCancel,
}: IAddTodoModalProps) => {
  const [todoInputValue, setTodoInputValue] = useState<string>('');

  const handleClearTodoInput = (): void => setTodoInputValue('');

  const handleAddTodo = (): void => {
    onAddTodo(todoInputValue);
    handleClearTodoInput();
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.addTodoModalContainer}>
        <Image
          source={require('../../assets/bigger-logo-white.png')}
          style={styles.modalImage}
        />
        <TextInput
          placeholder="Buy groceries"
          style={styles.todoInput}
          value={todoInputValue}
          onChangeText={setTodoInputValue}
        />
        <View style={styles.btnContainer}>
          <CustomButton
            text="Add todo"
            bgColor="#a0e1e1"
            color="#000000"
            onPress={handleAddTodo}
          />
          <CustomButton
            text="Cancel"
            bgColor="#a0e1e1"
            color="#000000"
            onPress={onCancel}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addTodoModalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#21231d',
  },
  todoInput: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    width: '100%',
    marginBottom: 16,
  },
  modalImage: {
    width: 200,
    height: 100,
    objectFit: 'contain',
    marginBottom: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
