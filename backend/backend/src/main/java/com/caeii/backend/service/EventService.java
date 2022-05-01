package com.caeii.backend.service;

import com.caeii.backend.model.Event;
import com.caeii.backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event findOneEvent (Long id) {
        return eventRepository.getById(id);
    }

    public List<Event> findAllEvents () {
        return eventRepository.findAll();
    }

    public Event saveEvent (Event event) {
        return eventRepository.save(event);
    }

    public Long deleteEvent (Event event) {
        eventRepository.delete(event);
        return event.getId();
    }

}
