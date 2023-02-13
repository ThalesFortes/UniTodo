import '../Card/styles.css'

export function Card(){
    return (
        <section className='card'>
            <div className='head'>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>5</span>
                </div>

                <div>
                    <p  id='completed'>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </div>
            <div className='lists'>
  
            </div>
        </section>
    )
}