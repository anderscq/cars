import "./List.css";
import { useState } from "react";

function List() {
  const [manufacturers] = useState([
    { id: 1, name: "Chevrolet", carsQty: 15, enginesQty: 3 },
    { id: 2, name: "Volkswagen", carsQty: 17, enginesQty: 4 },
    { id: 3, name: "Fiat", carsQty: 18, enginesQty: 2 },
    { id: 4, name: "Toyota", carsQty: 21, enginesQty: 5 },
    { id: 5, name: "Ford", carsQty: 14, enginesQty: 3 },
    { id: 6, name: "Honda", carsQty: 16, enginesQty: 4 },
    { id: 7, name: "Hyundai", carsQty: 19, enginesQty: 3 },
    { id: 8, name: "Nissan", carsQty: 20, enginesQty: 2 },
    { id: 9, name: "Kia", carsQty: 13, enginesQty: 3 },
    { id: 10, name: "Renault", carsQty: 12, enginesQty: 2 },
    { id: 11, name: "Peugeot", carsQty: 11, enginesQty: 3 },
    { id: 12, name: "Citroën", carsQty: 10, enginesQty: 2 },
    { id: 13, name: "Jeep", carsQty: 9, enginesQty: 3 },
    { id: 14, name: "Chrysler", carsQty: 8, enginesQty: 2 },
    { id: 15, name: "Dodge", carsQty: 7, enginesQty: 3 },
    { id: 16, name: "Mitsubishi", carsQty: 6, enginesQty: 2 },
    { id: 17, name: "Subaru", carsQty: 5, enginesQty: 3 },
    { id: 18, name: "Mazda", carsQty: 4, enginesQty: 2 },
    { id: 19, name: "Volvo", carsQty: 3, enginesQty: 1 },
    { id: 20, name: "Land Rover", carsQty: 2, enginesQty: 1 },
    { id: 21, name: "Jaguar", carsQty: 1, enginesQty: 1 },
  ]);

  const [page, setPage] = useState(1);
  const perPage = 10;
  const total = manufacturers.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const visible = manufacturers.slice(start, end);

  function go(p) {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
  }

  return (
    <div className="manufacturers-list">
      <h1>Manufacturers</h1>

      <div className="table-wrapper">
        <table className="manufacturers-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Qtd Carros</th>
              <th>Qtd Motores</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((m) => (
              <tr key={m.id}>
                <td data-label="Nome">{m.name}</td>
                <td data-label="Qtd Carros">{m.carsQty}</td>
                <td data-label="Qtd Motores">{m.enginesQty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="pagination"
        style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}
      >
        <button onClick={() => go(page - 1)} disabled={page === 1}>
          Prev
        </button>

        {/* páginas - simples listagem */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => go(p)}
            style={{
              fontWeight: p === page ? "700" : "400",
              padding: "6px 10px",
            }}
          >
            {p}
          </button>
        ))}

        <button onClick={() => go(page + 1)} disabled={page === totalPages}>
          Next
        </button>

        <div style={{ marginLeft: "auto", color: "#666", fontSize: 14 }}>
          Mostrando {Math.min(start + 1, total)}–{Math.min(end, total)} de{" "}
          {total}
        </div>
      </div>
    </div>
  );
}

export default List;
