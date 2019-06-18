## Spreadsheet

Spreadsheet powered by [x-spreadsheet](https://github.com/myliang/x-spreadsheet) and omi.

## Usage

```jsx
<m-spreadsheet
  onChange={(evt)=>{
    console.log(evt.detail)
  }}
  width={500}
  height={500}
  data={
    {
      freeze: 'B3',
      styles: [{
        bgcolor: '#f4f5f8',
        textwrap: true,
        color: '#900b09',
        border: {
          top: ['thin', '#0366d6'],
          bottom: ['thin', '#0366d6'],
          right: ['thin', '#0366d6'],
          left: ['thin', '#0366d6']
        }
      }],
      merges: [
        'C3:D4'
      ],
      rows: {
        1: {
          cells: {
            0: { text: 'testingtesttestetst' },
            2: { text: 'testing' }
          }
        },
        2: {
          cells: {
            0: { text: 'render', style: 0 },
            1: { text: 'Hello' },
            2: { text: 'haha', merge: [1, 1] }
          }
        },
        8: {
          cells: {
            8: { text: 'border test', style: 0 }
          }
        }
      }
    }}>
</m-spreadsheet>
```

## API

### Props

```jsx
{
  data?: object
  width?: number
  height?: number
}
```
