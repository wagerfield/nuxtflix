import { mapEntry, isEntry } from "./utils"

test("isEntry(entry)", () => {
  expect(isEntry({ fields: {}, sys: 10 })).toBe(false)
  expect(isEntry({ fields: {}, sys: {} })).toBe(true)
})

test("mapEntry(entry)", () => {
  expect(
    mapEntry({
      fields: {
        foo: "foo",
        bar: {
          fields: {
            one: "one",
            two: "two"
          },
          sys: {
            id: "id",
            space: "id"
          }
        },
        baz: [
          {
            fields: {
              a: "a",
              b: "b"
            },
            sys: {
              space: "id",
              createdAt: "datetime",
              updatedAt: "datetime"
            }
          },
          {
            c: "c",
            d: "d"
          }
        ]
      },
      sys: {
        id: "id",
        space: "id",
        environment: "id",
        createdAt: "datetime",
        updatedAt: "datetime"
      }
    })
  ).toEqual({
    id: "id",
    createdAt: "datetime",
    updatedAt: "datetime",
    foo: "foo",
    bar: {
      id: "id",
      one: "one",
      two: "two"
    },
    baz: [
      {
        a: "a",
        b: "b",
        createdAt: "datetime",
        updatedAt: "datetime"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  })
})
