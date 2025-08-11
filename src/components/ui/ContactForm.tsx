import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Vamos Conversar</h2>
        <p>Tem um projeto em mente ou gostaria de fazer um orçamento? Me envie uma mensagem!</p>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;