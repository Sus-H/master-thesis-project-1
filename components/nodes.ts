
import { type AppNode } from './types';
import { Position } from "@xyflow/react";


export const initialNodes = [
    {
      id: 'horizontal-1',
      sourcePosition: Position.Right,
      type: 'Scenario 1',
      data: { label: 'Scenario 1' },
      position: { x: 0, y: 0 },
      draggable: false,
    },
    {
      id: 'horizontal-2',
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      data: { label: 'Bil 1' },
      position: { x: 250, y: 0 },
      draggable: false,
    },
    {
      id: 'horizontal-3',
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      data: { label: 'Kalle' },
      position: { x: 500, y: 0 },
      draggable: false,
    },
    {
      id: 'horizontal-4',
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      data: { label: 'Birgit' },
      position: { x: 500, y: -80 },
      draggable: false,
    },
    {
      id: 'horizontal-5',
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      data: { label: 'Lasse' },
      position: { x: 500, y: 80 },
      draggable: false,
    },
  ];
  