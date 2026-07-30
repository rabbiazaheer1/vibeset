import React from "react";
import { useParams, Navigate } from "react-router-dom";
import PageHeader from "../../components/ui/PageHeader.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";
import { LABS_PRODUCTS } from "../../constants/labs.js";

export default function LabDetails() {
  const { slug } = useParams();
  const product = LABS_PRODUCTS.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/404" replace />;

  const Icon = product.icon;

  return (
    <>
      <PageHeader eyebrow="VIBESET LABS" title={product.title} description={product.description} />
      <section className="bg-ink-950 pb-28">
        <div className="container-page flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/5">
            <Icon size={40} className="text-white/85" />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
