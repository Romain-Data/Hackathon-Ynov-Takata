package fr.ynov.takata_backend.generic;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * Class abstract Generic Controller
 * @param <D> type parameter match DTO class
 * @param <I> type parameter match ID data type
 * @param <S> type parameter match Service class
 */
public abstract class GenericController<D, I, S extends GenericService<D, I>> {

    protected final S service;

    protected GenericController(S service) {
        super();
        this.service = service;
    }

    /**
     * Method for get all DTO in a list
     * @return a list of DTO D
     */
    @GetMapping(produces = "application/json")
    public List<D> all() {
        return service.all();
    }

    /**
     * Method for save a new entities
     * @param dto
     * @return a DTO
     */
    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<D> save(@RequestBody D dto) {
        D dtoAdd = service.saveOrUpdate(dto);
        return ResponseEntity.ok(dtoAdd);
    }

    /**
     * Method for update a entities
     * @param dto
     * @return a DTO
     */
    @PutMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<D> update(@RequestBody D dto) {
        D dtoSaved = service.saveOrUpdate(dto);
        return ResponseEntity.ok(dtoSaved);
    }

    /**
     * Method for get a DTO by a Id
     * @param id type I 
     * @return a DTO D
     */
    @GetMapping(value = "byid/{id}", produces = "application/json")
    public D getById(@PathVariable I id) {
        return service.getById(id);
    }

    /**
     * Method for delete a entities by a id I
     * @param id type I
     */
    @DeleteMapping(value = "/{id}", produces = "application/json")
    public void deleteById(@PathVariable I id) {
        service.deleteById(id);
    }

    /**
     * Method for get the number of entites in the data base
     * @return a number of entities
     */
    @GetMapping(value = "/count", produces = "application/json")
    public long count() {
        return service.count();
    }
}