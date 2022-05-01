package com.caeii.backend.controller.rest;

import com.caeii.backend.model.Event;
import com.caeii.backend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EventRESTController {

    @Autowired
    private EventService eventService;

    // Endpoints para la página.

    @GetMapping("/event/:id")
    public Event getByIdEvent(@PathVariable Long id) {
        return eventService.findOneEvent(id);
    }

    @GetMapping("/event")
    public List<Event> getAllEvents() {
        return eventService.findAllEvents();
    }

    // Endpoints extra para facilitar testeos.

    @PostMapping("/event")
    public Event postEvent(@RequestBody Event event) {
        return eventService.saveEvent(event);
    }

    @DeleteMapping("/event")
    public Long deleteEvent(@RequestBody Event event) {
        return eventService.deleteEvent(event);
    }

}
