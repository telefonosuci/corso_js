import { css, html, LitElement } from 'lit';
import {customElement } from 'lit/decorators.js';

@customElement('my-text-box')
export class CounterComponent extends LitElement {
  static styles = css`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  // Proprietà per il contatore
  private counter: number = 0;

  // Metodo per gestire il click sul pulsante e incrementare il contatore
  incrementCounter() {
    this.counter++;
    this.requestUpdate(); // Richiede l'aggiornamento della vista
  }

  // Metodo per renderizzare il componente
  render() {
    return html`
      <div>
        <p>Counter: ${this.counter}</p>
        <button @click=${this.incrementCounter}>Increment</button>
      </div>
    `;
  }
}

