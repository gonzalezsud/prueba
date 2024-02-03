// Dashboard.js
import React from 'react';
// Importaciones adicionales si son necesarias

function Dashboard() {
  // Lógica del componente para mostrar el dashboard
  const stats = {
    proyectos: 112,
    clientes: 44,
    tareas: 37,
    expertos: 218,
    tareasTotales: 385,
    tareasAtrasadas: 19,
    tareasCompletadas: 166,
    tareasEnCurso: 115,
    tareasEnEspera: 31,
    tareasPendientes: 47,
    revisarTareas: 5,
    // ...otros datos
  };
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Welcome Admin!</h1>
    <div className="grid grid-cols-4 gap-4">
      {/* Tarjetas de estadísticas */}
      <div className="bg-white rounded shadow p-4">
        <p className="text-orange-500 text-lg">Proyectos</p>
        <p className="text-2xl font-bold">{stats.proyectos}</p>
      </div>
      {/* Repite los elementos para clientes, tareas y expertos */}
      
      {/* Gráficos y barras de progreso */}
      <div className="bg-white rounded shadow p-4 col-span-2">
        <h2 className="font-bold text-xl mb-3">Estadísticas</h2>
        <div className="flex items-center justify-between">
          <p>Hoy salir</p>
          <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700">
            <div className="bg-orange-400 h-2.5 rounded" style={{ width: '70%' }}></div>
          </div>
        </div>
        {/* Repite para factura pendiente, proyectos completados, etc. */}
      </div>

      {/* Estadísticas de tareas */}
      <div className="bg-white rounded shadow p-4 col-span-2">
        <h2 className="font-bold text-xl mb-3">Estadísticas de tareas</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg">Tareas totales</p>
            <p className="text-2xl font-bold">{stats.tareasTotales}</p>
          </div>
          <div>
            <p className="text-lg">Tareas atrasadas</p>
            <p className="text-2xl font-bold">{stats.tareasAtrasadas}</p>
          </div>
          {/* Más elementos para tareas completadas, en curso, etc. */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
