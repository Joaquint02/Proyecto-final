import { useEffect, useState } from "react";
import axios from "axios";

function UserManagement() {

  const [users, setUsers] =
    useState([]);

  const loadUsers = async () => {

    try {

      const res = await axios.get(
        "http://localhost:3000/api/auth/users"
      );

      setUsers(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    loadUsers();

  }, []);

  const changeRole = async (id) => {

    try {

      await axios.put(
        `http://localhost:3000/api/auth/users/${id}/role`
      );

      loadUsers();

    } catch (error) {

      console.error(error);

    }

  };

  const deleteUser = async (id) => {

    if (
      !window.confirm(
        "¿Eliminar usuario?"
      )
    ) return;

    try {

      await axios.delete(
        `http://localhost:3000/api/auth/users/${id}`
      );

      loadUsers();

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="card">

      <h2>
        Gestión de Usuarios
      </h2>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Usuario</th>

            <th>Rol</th>

            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user.id}>

              <td>
                {user.id}
              </td>

              <td>
                {user.username}
              </td>

              <td>
                {user.rol}
              </td>

              <td>

                <button
                  onClick={() =>
                    changeRole(user.id)
                  }
                >
                  Cambiar Rol
                </button>

                <button
                  onClick={() =>
                    deleteUser(user.id)
                  }
                >
                  Eliminar
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default UserManagement;