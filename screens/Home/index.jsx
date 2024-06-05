import { useState } from "react";
import { View, TextInput, Alert, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import { Task } from "./components/Task";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

export const Home = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { todos } = useSelector((slicies) => slicies.todoSlice);

  const createTodo = () => {
    if (text.trim().length) {
      const todo = {
        check: false,
        text,
        id: Date.now(),
      };
      dispatch(addTodo(todo));
      setText("");
    } else {
      Alert.alert("Ошибка", "Необходимо заполнить поле ввода текста!!!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Введие текст"
          style={styles.input}
          onChangeText={setText}
          value={text}
        />

        <TouchableOpacity style={styles.button}>
          <Button title="Новая запись" onPress={createTodo} />
        </TouchableOpacity>
      </View>
      {todos.map((todo) => (
        <Task todo={todo} />
      ))}
    </View>
  );
};
