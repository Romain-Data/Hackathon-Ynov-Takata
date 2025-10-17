package fr.ynov.takata_backend.generic;

import java.util.List;

public interface GenericService<D, I> {
    List<D> all();

    D saveOrUpdate(D dto);

    D getById(I id);

    void deleteById(I id);

    long count();
}