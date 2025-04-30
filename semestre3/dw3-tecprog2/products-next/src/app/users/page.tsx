"use client";

import { useEffect, useState } from "react";
import { carregarUsers, cadastrarUser } from "./api";
import { IUser } from "@/interfaces/user.interface";
import { useForm } from "react-hook-form";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  async function carregarDados() {
    const users = await carregarUsers();
    setUsers(users);
  }

  useEffect(() => {
    carregarDados();
  }, []);

  type UserForm = { name: string; email: string; password: string };
  const { register, handleSubmit } = useForm<UserForm>();
  async function onSubmit(data: UserForm) {
    const user = await cadastrarUser(data);
    carregarDados();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Cadastrar</button>
      </form>
      <hr />
      <h1>Lista de users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} | {user.email}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
