import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="contact-content text-center">
              <h2>VAMOS CONVERSAR?</h2>
              <p>Tem um projeto em mente ou gostaria de fazer um orçamento? Me envie uma mensagem!</p>
            </div>
            
            <form className="contact-form" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea id="message" name="message" rows={4} className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-light w-100">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;