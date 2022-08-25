import { BackendCharacter } from './force-manager/interfaces';

export let users = [
  <BackendCharacter>{ ID: '1', Name: '🧑 Luke', CreatedAt: new Date() },
  <BackendCharacter>{ ID: '2', Name: '🧔 Han', CreatedAt: new Date() },
  <BackendCharacter>{ ID: '3', Name: '👸 Leia', CreatedAt: new Date() },
  <BackendCharacter>{ ID: '4', Name: '🤖 Anakin', CreatedAt: new Date() },
];

export let jedis = ['1', '4'];
export let siths = [];
