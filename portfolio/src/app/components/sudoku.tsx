import Box from '@mui/material/Box';
import { Button, ButtonBase, Card, CardActionArea, CardContent, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import classNames from 'classnames';


export default function SudokuBoard() {

    let initial_sudoku: number[][] = [[0, 0, 4, 0, 5, 0, 9, 7, 3], [2, 0, 7, 4, 6, 0, 0, 0, 0], [8, 3, 0, 1, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 8, 0, 0, 0, 6], [0, 2, 6, 5, 7, 1, 0, 4, 0], [0, 1, 3, 0, 0, 0, 2, 5, 0],
    [8, 9, 0, 4, 0, 0, 6, 0, 5], [0, 0, 2, 0, 1, 8, 0, 0, 4], [0, 0, 7, 5, 6, 0, 0, 0, 1]]

    let complete_sudoku: number[][] = [
        [1, 6, 4,
            2, 5, 8,
            9, 7, 3], [2, 9, 7, 4, 6, 3, 1, 8, 5], [8, 3, 5, 1, 7, 9, 4, 2, 6],
        [5, 4, 9,
            3, 8, 2,
            7, 1, 6], [8, 2, 6, 5, 7, 1, 3, 4, 9], [7, 1, 3, 6, 9, 4, 2, 5, 8],
        [8, 9, 1,
            4, 3, 7,
            6, 2, 5], [6, 5, 2, 9, 1, 8, 7, 3, 4], [3, 4, 7, 5, 6, 2, 9, 8, 1]
    ]

    let inputs: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9','X']


    let [sudoku, setSudoku] = useState<number[][]>(initial_sudoku);
    let [selection, setSelection] = useState([0, 0]);
    let [inputNumber, setInputNumber] = useState(0);


    const checkCols = (board: number[][]): boolean => {
        let sum: number;

        for (var a: number = 0; a <= 2; a++) {
            for (var c: number = 0; c <= 2; c++) {

                sum = 0;
                let set: Set<number> = new Set();

                for (var b: number = a; b <= a + 6; b = b + 3) {
                    for (var d: number = c; d <= c + 6; d = d + 3) {

                        sum += board[b][d]
                        set.add(board[b][d])
                    }
                }
                if (sum != 45 || set.size != 9) {
                    return false;
                }
            }
        }

        return true;
    }

    const checkRows = (board: number[][]): boolean => {
        let row: number[]

        for (var i: number = 0; i <= 6; i = i + 3) {

            for (var k: number = 0; k <= 6; k = k + 3) {

                row = board[i].slice(k, k + 3).concat(board[i + 1].slice(k, k + 3), board[i + 2].slice(k, k + 3));
                const sum = row.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                let rowSet: Set<number> = new Set(row)

                if (sum != 45 || rowSet.size != 9) {
                    return false;
                }
            }
        }
        return true;
    }


    const checkGrid = (board: number[][]): boolean => {
        //Check that all 3x3 grids are correct
        for (var i = 0; i < board.length; i++) {
            const sum: number = board[i].reduce(
                (accumulator: number, currentValue: number) => accumulator + currentValue,
            );
            if (sum != 45) {
                return false;
            }
            let arrSet: Set<number> = new Set(sudoku[i])

            if (arrSet.size < 9) {
                return false;
            }
        }
        return true;
    }

    const handleSubmit = () => {
        let board = sudoku
        if (checkRows(board) && checkCols(board) && checkGrid(board)) {
            console.log("true")
        } else {
            console.log("false")
        }
    }

    const handleChange = (value: string) => e => {
  
        const nextSudoku = sudoku.map((grid, indexi_new) => {
            if (indexi_new !== selection[0]) {
                return grid;
            }
            return grid.map((item, indexj_new) => {

                if (indexj_new === selection[1]) {
                    if(!isNaN(+value)){
                        return Number(value);
                    }else{
                        return 0;
                    }
                }
                return item;

            })
        })
        setSudoku(nextSudoku)
    }

    const handleSelection = (indexi: number, indexj: number) => e => {

        if (initial_sudoku[indexi][indexj] === 0) {
            setSelection([indexi, indexj])
        }
    }

    return (<>

        <Box className="grid grid-cols-3 gap-4 p-4">
            {sudoku.map((i, indexi) => (
                <div key={indexi} className="grid grid-cols-3 grid-rows-3">
                    {i.map((j, indexj) => (
                

                        <Card
                            className={classNames('text-center w-12.5 h-12.5 p-3 m-0.5', {
                                'bg-blue-200': selection && selection[0] === indexi && selection[1] === indexj
                            }, {
                                'text-slate-400' :initial_sudoku[indexi][indexj] != 0
                            })}
                            key={indexi + "," + indexj}
                            onClick={handleSelection(indexi, indexj)}

                        >
                            {j === 0 ? '' : j}
                        </Card>
                    ))}
                </div>
            ))}
        </Box>
        <Box className="flex justify-centre pb-10">
            {inputs.map((value, index) => (
                <IconButton
                    size='medium'
                    className='p-2 w-12'
                    onClick={handleChange(value)}
                    key={index}
                >{value}</IconButton>
            ))}

            <Box className="w-full flex justify-end">
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Box>

    </>
    );

}