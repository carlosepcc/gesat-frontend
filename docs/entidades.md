## Entidades

### User
- username: String
- rol: Enum ("Administrador" | "Coordinador de calidad" | "Asesor de calidad" | "Encargado de proyecto" | "Revisor")

## Artefacto
- id
- name: String
- descripcion: String
- fase: Int (1 | 2 | 3)
- disciplina: Int (1 | 2 | 3)
- adjuntos: Array: String

## Dictámen técnico
- id
- proyecto: String
- encargado: User.username: String
- descripcion: String
- noconformidades: Int
- oportunidades: Int
- estado: Int (1 | 2 | 3)

## Hallazgo
- id
- producto: String
- ubicacion: String
- descripcion: String
- impacto: Int (1 | 2 | 3)
- date: Date

## Minuta de reunión
- id
- proyecto: String
- revisor: User.username: String
- encargado: User.username: String
- descripcion: String

## Reporte de notificación
- id
- name: String
- fase: Int (1 | 2 | 3)
- disciplina: Int (1 | 2 | 3)
- local: String
- date: Date
- descripcion: String

## Reporte técnico
- id
- name: String
- estado: Int (1 | 2 | 3)
- tipo: Int (1 | 2 | 3)
- local: String
- inicio: Date
- cumplimiento: Date
- evaluacion: Int (1 | 2 | 3)
- descripcion: String
- adjuntos: Array: String
