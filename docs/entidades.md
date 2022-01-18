## Entidades

### User
- username: String
- rol: Enum ("Administrador" | "Coordinador de calidad" | "Asesor de calidad" | "Encargado de proyecto")

## Artefacto
- id
- name: String
- descripcion: String
- fase: Int (1 | 2 | 3)
- disciplina: Int (1 | 2 | 3)
- adjuntos: Array: String

## Hallazgo
- id
- ptafectado: String
- ubicacion: String
- descripcion: String
- impacto: Int (1 | 2 | 3)
- fecha: Date

## Minuta de reunión