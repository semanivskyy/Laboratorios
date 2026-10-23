import { useState } from "react";

export default function TaskForm({
  onGuardarTarea,
  tareaEnEdicion,
  onCancelarEdicion,
}) {
  // El formulario se reinicia solo: App le asigna una "key" distinta según la tarea en edición
  const [titulo, setTitulo] = useState(tareaEnEdicion?.titulo ?? "");
  const [descripcion, setDescripcion] = useState(
    tareaEnEdicion?.descripcion ?? "",
  );
  const [prioridad, setPrioridad] = useState(
    tareaEnEdicion?.prioridad ?? "Media",
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    onGuardarTarea({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      prioridad,
    });

    if (!tareaEnEdicion) {
      setTitulo("");
      setDescripcion("");
      setPrioridad("Media");
    }
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white fw-bold py-3">
        {tareaEnEdicion ? `Editar Tarea #${tareaEnEdicion.id}` : "Nueva Tarea"}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Título *</label>
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              placeholder="Ej. Estudiar React"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              rows="3"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Detalles..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Prioridad</label>
            <select
              className="form-select"
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {tareaEnEdicion ? "Actualizar Tarea" : "Guardar Tarea"}
          </button>
          {tareaEnEdicion && (
            <button
              type="button"
              className="btn btn-secondary w-100 mt-2"
              onClick={onCancelarEdicion}
            >
              Cancelar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
