import { BackendCharacter, FrontendCharacter } from './interfaces';

export function mapCharacterForBackend(user: FrontendCharacter) {
  return <BackendCharacter>{
    ID: user.id,
    Name: user.name,
  };
}

export function mapCharacterForFronted(user: BackendCharacter) {
  return <FrontendCharacter>{
    id: user.ID,
    name: user.Name,
  };
}
