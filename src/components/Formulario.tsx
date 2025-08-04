function Formulario() {
return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '300px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="email@exemplo.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
      </div>
    </div>
  );
}
export default Formulario;