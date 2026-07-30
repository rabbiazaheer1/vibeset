import React from "react";
import LabRow from "../../cards/LabRow.jsx";
import { LABS_PRODUCTS } from "../../../constants/labs.js";

export default function LabsList() {
  return (
    <section className="bg-ink-950 pb-28">
      <div className="container-page">
        <div className="flex flex-col gap-5">
          {LABS_PRODUCTS.map((product, i) => (
            <LabRow
              key={product.id}
              icon={product.icon}
              title={product.title}
              description={product.description}
              to={`/labs/${product.slug}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
