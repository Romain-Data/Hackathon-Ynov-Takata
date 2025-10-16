package fr.ynov.takata_backend.generic;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

@Transactional
public class GenericServiceImpl<E, D, I, R extends JpaRepository<E, I>> {
	
	protected final R repository;
	protected final Class<E> entityClass;
	protected final Class<D> dtoClass;
	protected final ModelMapper mapper;
    
	public GenericServiceImpl(R repository, Class<E> entityClass, Class<D> dtoClass, ModelMapper mapper) {
		super();
		this.repository = repository;
		this.entityClass = entityClass;
		this.dtoClass = dtoClass;
		this.mapper = mapper;
	}

	public List<D> all() {
		return repository.findAll()
				.stream()
				.map(entity -> mapper.map(entity, dtoClass))
				.toList();
	}

	public Page<D> getAllPage(Pageable page) {
		return repository.findAll(page).map(entity -> mapper.map(entity, dtoClass));
	}

	public D saveOrUpdate(D dto) {
		return mapper.map(repository.saveAndFlush(mapper.map(dto, entityClass)), dtoClass);
	}

	public D getById(I id) {
		return repository.findById(id)
				.map(entity -> mapper.map(entity, dtoClass))
				.orElse(null);
	}

	public void deleteById(I id) {
		repository.deleteById(id);

	}
}
