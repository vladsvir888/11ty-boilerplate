# Компонент ../../@atoms/title/title.twig

## Пример кода

```twig
{% include '../../@atoms/title/title.twig' with {
    title: {
      level: 1,
      class: "test-title",
      attrs: ""
      text: "test-title",
    }
} %}
```

## Пропсы

`level` - уровень, по дефолту 1

`id` - id

`class` - дополнительные классы

`text` - текст

`attrs` - строка с атрибутами

`link` - заголовок-ссылка

## Порядок пропсов

- level
- link
- id, class
- attrs
- text
