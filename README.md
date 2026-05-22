# Wookcom Waitlist

Landing V1 para validar cupos fundadores de Wookcom.

## Oferta

- Deposito fundador: USD 29
- Setup Starter fundador: USD 297
- Continuidad opcional: USD 49/mes

## Desarrollo

```bash
npm install
npm run dev
```

## Formulario

El formulario envia datos a `/api/leads`.

Por defecto el endpoint valida y registra la solicitud en logs del servidor. Para enviar los leads a una herramienta externa, configura:

```bash
LEAD_WEBHOOK_URL=https://...
```

El webhook recibe un `POST` JSON con:

- name
- contact
- businessType
- desiredOperator
- currentTools
- mainConcern
- source
- submittedAt

## Despliegue

Proyecto preparado para Vercel.
