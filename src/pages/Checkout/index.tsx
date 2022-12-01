import { useForm } from 'react-hook-form'

export function Checkout() {
  const { handleSubmit } = useForm()

  function handleCreateNewOrder() {}

  return (
    <main>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <section>
          <h2>Complete seu pedido</h2>

          <div></div>

          <div></div>
        </section>

        <section>
          <h2>Cafés selecionados</h2>

          <div></div>

          <button type="submit">Confirmar pedido</button>
        </section>
      </form>
    </main>
  )
}
