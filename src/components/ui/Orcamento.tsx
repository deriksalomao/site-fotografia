import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Orcamento() {
  return (
    <section id="orcamento" className="orcamento-section container">
      <h2>ORÇAMENTO</h2>
      
      <div className="row justify-content-center">

        {/* --- Card Basic --- */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 orcamento-card">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center">BASIC</h3>
              <ul className="list-unstyled my-4">
                <li><FaCheckCircle className="icon-check" /> 5 Fotos</li>
                <li><FaCheckCircle className="icon-check" /> Edição</li>
                <li><FaTimesCircle className="icon-times" /> Equipamento de Luz</li>
                <li><FaTimesCircle className="icon-times" /> Direção Fotográfica</li>
                <li><FaTimesCircle className="icon-times" /> Transporte</li>
              </ul>
              <p className="card-text text-center orcamento-price mt-auto">R$ 100,00</p>
            </div>
          </div>
        </div>

        {/* --- Card Standard --- */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 orcamento-card standard"> 
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center">STANDARD</h3>
              <ul className="list-unstyled my-4">
                <li><FaCheckCircle className="icon-check" /> 10 Fotos</li>
                <li><FaCheckCircle className="icon-check" /> Edição</li>
                <li><FaCheckCircle className="icon-check" /> Equipamento de Luz</li>
                <li><FaTimesCircle className="icon-times" /> Direção Fotográfica</li>
                <li><FaTimesCircle className="icon-times" /> Transporte</li>
              </ul>
              <p className="card-text text-center orcamento-price mt-auto">R$ 200,00</p>
            </div>
          </div>
        </div>

        {/* --- Card Premium --- */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 orcamento-card">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center">PREMIUM</h3>
              <ul className="list-unstyled my-4">
                <li><FaCheckCircle className="icon-check" /> 20 Fotos</li>
                <li><FaCheckCircle className="icon-check" /> Edição</li>
                <li><FaCheckCircle className="icon-check" /> Equipamento de Luz</li>
                <li><FaCheckCircle className="icon-check" /> Direção Fotográfica</li>
                <li><FaCheckCircle className="icon-check" /> Transporte</li>
              </ul>
              <p className="card-text text-center orcamento-price mt-auto">R$ 400,00</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Orcamento;