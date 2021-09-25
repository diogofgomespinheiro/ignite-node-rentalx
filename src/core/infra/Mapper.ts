export interface IMapper<Entity, DTO = any> {
  toDomain?(raw: any): Entity;
  toPersistence?(entity: Entity): any;
  toDTO?(entity: Entity): DTO;
}
