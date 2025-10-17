package fr.ynov.takata_backend.generic;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

/**
 * Service impl generic class
 * @param <E> entity class parameter
 * @param <D> dto class parameter
 * @param <I> id class parameter
 * @param <R> repository class parameter
 */
@Transactional
public abstract class GenericServiceImpl<E, D, I, R extends JpaRepository<E, I>> implements GenericService<D, I> {
    protected final R repository;
    protected final Class<E> entityClass;
    protected final Class<D> dtoClass;
    protected final ModelMapper mapper;

    protected GenericServiceImpl(R repository, Class<E> entityClass, Class<D> dtoClass, ModelMapper mapper) {
        this.repository = repository;
        this.entityClass = entityClass;
        this.dtoClass = dtoClass;
        this.mapper = mapper;
    }

    /**
     * Method for get a list of all entities
     * @return List of DTO D
     */
    @Override
    public List<D> all() {
        return repository.findAll()
                .stream()
                .map(entity -> mapper.map(entity, this.dtoClass))
                .toList();
    }

    /**
     * Method for save or update a entities inside data base
     * @param dto type D
     * @return a DTO D
     */
    @Override
    public D saveOrUpdate(D dto) {
        return mapper.map(repository.saveAndFlush(mapper.map(dto, this.entityClass)), dtoClass);
    }

    /**
     * Method for get a entities by this id on param
     * @param id type I
     * @return a DTO D
     */
    @Override
    public D getById(I id) {
        return repository.findById(id)
                .map(entity -> mapper.map(entity, dtoClass))
                .orElse(null);
    }

    /**
     * Delete a entities by a id type I
     */
    @Override
    public void deleteById(I id) {
        repository.deleteById(id);
    }

    /**
     * Method for count every entities of type I inside data base
     * @return a number of all entities I
     */
    @Override
    public long count() {
        return repository.count();
    }
}