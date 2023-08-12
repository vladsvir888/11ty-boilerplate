# Компонент ../../@atoms/form_control/form_control.twig

## Пример кода

```twig
{% include "../../@atoms/form_control/form_control.twig" with {
  "form_control": {
    "view": "check",
    "name": "custom_checkbox",
    "input": {
      "type": "checkbox"
    },
    "label": {
      "text": "Дефолтный чекбокс"
    }
  }
} %}
```

## Пропсы

`view` - тип контрола

`name` - имя контрола (используется для связи id инпута и for label), если идет создание контролов через массив, то в конец добавляется индекс элемента в массиве для уникализации. Если нет, то добавляется в конец строка default.

`class` - дополнительные классы контрола

`input.type` - тип инпута

`input.name` - имя инпута

`input.class` - дополнительные классы инпута

`input.placeholder` - плейсхолдер инпута

`input.attrs` - атрибуты инпута

`label.text` - текст лэйбла (фейк-плейсхолдер)

`label.class` - дополнительные классы лэйбла

## Порядок пропсов

- view
- name
- class
- input-свойства
  - id, class
  - type, name, placeholder и т.д.
- label-свойства
  - class
  - text
