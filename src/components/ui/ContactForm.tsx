import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="d-flex justify-content-center align-items-center bg-light py-5">
      <div className="card p-4 shadow-sm" style={{ width: '300px' }}>
        <h3 className="text-center mb-4">Contato</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" placeholder="Seu nome" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="email@exemplo.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">Mensagem</label>
            <textarea className="form-control" id="message" rows={3} placeholder="Sua mensagem"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;